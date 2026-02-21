# Headphones


```text
fontawesome/Solid/Headphones
```

```text
include('fontawesome/Solid/Headphones')
```



| Illustration | Headphones |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Headphones.png) | ![illustration for Headphones](../../fontawesome/Solid/Headphones.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HeadphonesXs>`
- `<$HeadphonesSm>`
- `<$HeadphonesMd>`
- `<$HeadphonesLg>`





## Headphones

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Headphones
include('fontawesome/Solid/Headphones')

' renders the element
Headphones('Headphones', 'Headphones', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Headphones
include('fontawesome/Solid/Headphones')

' renders the element
Headphones('Headphones', 'Headphones', 'an optional tech label', 'an optional description')
@enduml
```

