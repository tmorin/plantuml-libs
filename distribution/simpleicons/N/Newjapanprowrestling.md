# Newjapanprowrestling


```text
simpleicons/N/Newjapanprowrestling
```

```text
include('simpleicons/N/Newjapanprowrestling')
```



| Illustration | Newjapanprowrestling |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Newjapanprowrestling.png) | ![illustration for Newjapanprowrestling](../../simpleicons/N/Newjapanprowrestling.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NewjapanprowrestlingXs>`
- `<$NewjapanprowrestlingSm>`
- `<$NewjapanprowrestlingMd>`
- `<$NewjapanprowrestlingLg>`





## Newjapanprowrestling

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Newjapanprowrestling
include('simpleicons/N/Newjapanprowrestling')

' renders the element
Newjapanprowrestling('Newjapanprowrestling', 'Newjapanprowrestling', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Newjapanprowrestling
include('simpleicons/N/Newjapanprowrestling')

' renders the element
Newjapanprowrestling('Newjapanprowrestling', 'Newjapanprowrestling', 'an optional tech label', 'an optional description')
@enduml
```

