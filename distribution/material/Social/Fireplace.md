# Fireplace


```text
material/Social/Fireplace
```

```text
include('material/Social/Fireplace')
```



| Illustration | Fireplace |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/Fireplace.png) | ![illustration for Fireplace](../../material/Social/Fireplace.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FireplaceXs>`
- `<$FireplaceSm>`
- `<$FireplaceMd>`
- `<$FireplaceLg>`





## Fireplace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Fireplace
include('material/Social/Fireplace')

' renders the element
Fireplace('Fireplace', 'Fireplace', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Fireplace
include('material/Social/Fireplace')

' renders the element
Fireplace('Fireplace', 'Fireplace', 'an optional tech label', 'an optional description')
@enduml
```

