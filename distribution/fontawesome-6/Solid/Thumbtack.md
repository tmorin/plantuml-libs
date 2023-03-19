# Thumbtack


```text
fontawesome-6/Solid/Thumbtack
```

```text
include('fontawesome-6/Solid/Thumbtack')
```



| Illustration | Thumbtack |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Thumbtack.png) | ![illustration for Thumbtack](../../fontawesome-6/Solid/Thumbtack.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThumbtackXs>`
- `<$ThumbtackSm>`
- `<$ThumbtackMd>`
- `<$ThumbtackLg>`





## Thumbtack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Thumbtack
include('fontawesome-6/Solid/Thumbtack')

' renders the element
Thumbtack('Thumbtack', 'Thumbtack', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Thumbtack
include('fontawesome-6/Solid/Thumbtack')

' renders the element
Thumbtack('Thumbtack', 'Thumbtack', 'an optional tech label', 'an optional description')
@enduml
```

