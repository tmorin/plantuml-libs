# Hanukiah


```text
fontawesome/Solid/Hanukiah
```

```text
include('fontawesome/Solid/Hanukiah')
```



| Illustration | Hanukiah |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Hanukiah.png) | ![illustration for Hanukiah](../../fontawesome/Solid/Hanukiah.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HanukiahXs>`
- `<$HanukiahSm>`
- `<$HanukiahMd>`
- `<$HanukiahLg>`





## Hanukiah

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Hanukiah
include('fontawesome/Solid/Hanukiah')

' renders the element
Hanukiah('Hanukiah', 'Hanukiah', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hanukiah
include('fontawesome/Solid/Hanukiah')

' renders the element
Hanukiah('Hanukiah', 'Hanukiah', 'an optional tech label', 'an optional description')
@enduml
```

