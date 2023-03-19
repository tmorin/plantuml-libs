# Sick


```text
material-4/Social/Sick
```

```text
include('material-4/Social/Sick')
```



| Illustration | Sick |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/Sick.png) | ![illustration for Sick](../../material-4/Social/Sick.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SickXs>`
- `<$SickSm>`
- `<$SickMd>`
- `<$SickLg>`





## Sick

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Sick
include('material-4/Social/Sick')

' renders the element
Sick('Sick', 'Sick', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Sick
include('material-4/Social/Sick')

' renders the element
Sick('Sick', 'Sick', 'an optional tech label', 'an optional description')
@enduml
```

