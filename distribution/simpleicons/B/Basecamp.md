# Basecamp


```text
simpleicons/B/Basecamp
```

```text
include('simpleicons/B/Basecamp')
```



| Illustration | Basecamp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Basecamp.png) | ![illustration for Basecamp](../../simpleicons/B/Basecamp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BasecampXs>`
- `<$BasecampSm>`
- `<$BasecampMd>`
- `<$BasecampLg>`





## Basecamp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Basecamp
include('simpleicons/B/Basecamp')

' renders the element
Basecamp('Basecamp', 'Basecamp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Basecamp
include('simpleicons/B/Basecamp')

' renders the element
Basecamp('Basecamp', 'Basecamp', 'an optional tech label', 'an optional description')
@enduml
```

