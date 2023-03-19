# Bolt


```text
fontawesome-6/Solid/Bolt
```

```text
include('fontawesome-6/Solid/Bolt')
```



| Illustration | Bolt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Bolt.png) | ![illustration for Bolt](../../fontawesome-6/Solid/Bolt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BoltXs>`
- `<$BoltSm>`
- `<$BoltMd>`
- `<$BoltLg>`





## Bolt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Bolt
include('fontawesome-6/Solid/Bolt')

' renders the element
Bolt('Bolt', 'Bolt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bolt
include('fontawesome-6/Solid/Bolt')

' renders the element
Bolt('Bolt', 'Bolt', 'an optional tech label', 'an optional description')
@enduml
```

