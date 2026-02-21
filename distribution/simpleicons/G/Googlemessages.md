# Googlemessages


```text
simpleicons/G/Googlemessages
```

```text
include('simpleicons/G/Googlemessages')
```



| Illustration | Googlemessages |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Googlemessages.png) | ![illustration for Googlemessages](../../simpleicons/G/Googlemessages.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GooglemessagesXs>`
- `<$GooglemessagesSm>`
- `<$GooglemessagesMd>`
- `<$GooglemessagesLg>`





## Googlemessages

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Googlemessages
include('simpleicons/G/Googlemessages')

' renders the element
Googlemessages('Googlemessages', 'Googlemessages', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googlemessages
include('simpleicons/G/Googlemessages')

' renders the element
Googlemessages('Googlemessages', 'Googlemessages', 'an optional tech label', 'an optional description')
@enduml
```

