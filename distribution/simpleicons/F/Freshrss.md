# Freshrss


```text
simpleicons/F/Freshrss
```

```text
include('simpleicons/F/Freshrss')
```



| Illustration | Freshrss |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Freshrss.png) | ![illustration for Freshrss](../../simpleicons/F/Freshrss.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FreshrssXs>`
- `<$FreshrssSm>`
- `<$FreshrssMd>`
- `<$FreshrssLg>`





## Freshrss

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Freshrss
include('simpleicons/F/Freshrss')

' renders the element
Freshrss('Freshrss', 'Freshrss', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Freshrss
include('simpleicons/F/Freshrss')

' renders the element
Freshrss('Freshrss', 'Freshrss', 'an optional tech label', 'an optional description')
@enduml
```

