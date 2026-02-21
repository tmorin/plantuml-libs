# PestControlRodent


```text
material/Maps/PestControlRodent
```

```text
include('material/Maps/PestControlRodent')
```



| Illustration | PestControlRodent |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/PestControlRodent.png) | ![illustration for PestControlRodent](../../material/Maps/PestControlRodent.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PestControlRodentXs>`
- `<$PestControlRodentSm>`
- `<$PestControlRodentMd>`
- `<$PestControlRodentLg>`





## PestControlRodent

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PestControlRodent
include('material/Maps/PestControlRodent')

' renders the element
PestControlRodent('PestControlRodent', 'Pest Control Rodent', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PestControlRodent
include('material/Maps/PestControlRodent')

' renders the element
PestControlRodent('PestControlRodent', 'Pest Control Rodent', 'an optional tech label', 'an optional description')
@enduml
```

