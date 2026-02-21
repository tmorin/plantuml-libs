# Bugcrowd


```text
simpleicons/B/Bugcrowd
```

```text
include('simpleicons/B/Bugcrowd')
```



| Illustration | Bugcrowd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Bugcrowd.png) | ![illustration for Bugcrowd](../../simpleicons/B/Bugcrowd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BugcrowdXs>`
- `<$BugcrowdSm>`
- `<$BugcrowdMd>`
- `<$BugcrowdLg>`





## Bugcrowd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Bugcrowd
include('simpleicons/B/Bugcrowd')

' renders the element
Bugcrowd('Bugcrowd', 'Bugcrowd', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bugcrowd
include('simpleicons/B/Bugcrowd')

' renders the element
Bugcrowd('Bugcrowd', 'Bugcrowd', 'an optional tech label', 'an optional description')
@enduml
```

