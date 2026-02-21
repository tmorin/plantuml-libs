# Apachehive


```text
simpleicons/A/Apachehive
```

```text
include('simpleicons/A/Apachehive')
```



| Illustration | Apachehive |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Apachehive.png) | ![illustration for Apachehive](../../simpleicons/A/Apachehive.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApachehiveXs>`
- `<$ApachehiveSm>`
- `<$ApachehiveMd>`
- `<$ApachehiveLg>`





## Apachehive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Apachehive
include('simpleicons/A/Apachehive')

' renders the element
Apachehive('Apachehive', 'Apachehive', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Apachehive
include('simpleicons/A/Apachehive')

' renders the element
Apachehive('Apachehive', 'Apachehive', 'an optional tech label', 'an optional description')
@enduml
```

