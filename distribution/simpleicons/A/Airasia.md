# Airasia


```text
simpleicons/A/Airasia
```

```text
include('simpleicons/A/Airasia')
```



| Illustration | Airasia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Airasia.png) | ![illustration for Airasia](../../simpleicons/A/Airasia.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AirasiaXs>`
- `<$AirasiaSm>`
- `<$AirasiaMd>`
- `<$AirasiaLg>`





## Airasia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Airasia
include('simpleicons/A/Airasia')

' renders the element
Airasia('Airasia', 'Airasia', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Airasia
include('simpleicons/A/Airasia')

' renders the element
Airasia('Airasia', 'Airasia', 'an optional tech label', 'an optional description')
@enduml
```

