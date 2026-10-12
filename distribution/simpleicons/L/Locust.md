# Locust


```text
simpleicons/L/Locust
```

```text
include('simpleicons/L/Locust')
```



| Illustration | Locust |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Locust.png) | ![illustration for Locust](../../simpleicons/L/Locust.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LocustXs>`
- `<$LocustSm>`
- `<$LocustMd>`
- `<$LocustLg>`





## Locust

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Locust
include('simpleicons/L/Locust')

' renders the element
Locust('Locust', 'Locust', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Locust
include('simpleicons/L/Locust')

' renders the element
Locust('Locust', 'Locust', 'an optional tech label', 'an optional description')
@enduml
```

