# Mockserviceworker


```text
simpleicons/M/Mockserviceworker
```

```text
include('simpleicons/M/Mockserviceworker')
```



| Illustration | Mockserviceworker |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Mockserviceworker.png) | ![illustration for Mockserviceworker](../../simpleicons/M/Mockserviceworker.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MockserviceworkerXs>`
- `<$MockserviceworkerSm>`
- `<$MockserviceworkerMd>`
- `<$MockserviceworkerLg>`





## Mockserviceworker

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Mockserviceworker
include('simpleicons/M/Mockserviceworker')

' renders the element
Mockserviceworker('Mockserviceworker', 'Mockserviceworker', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mockserviceworker
include('simpleicons/M/Mockserviceworker')

' renders the element
Mockserviceworker('Mockserviceworker', 'Mockserviceworker', 'an optional tech label', 'an optional description')
@enduml
```

