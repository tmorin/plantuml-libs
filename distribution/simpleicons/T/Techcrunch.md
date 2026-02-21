# Techcrunch


```text
simpleicons/T/Techcrunch
```

```text
include('simpleicons/T/Techcrunch')
```



| Illustration | Techcrunch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Techcrunch.png) | ![illustration for Techcrunch](../../simpleicons/T/Techcrunch.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TechcrunchXs>`
- `<$TechcrunchSm>`
- `<$TechcrunchMd>`
- `<$TechcrunchLg>`





## Techcrunch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Techcrunch
include('simpleicons/T/Techcrunch')

' renders the element
Techcrunch('Techcrunch', 'Techcrunch', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Techcrunch
include('simpleicons/T/Techcrunch')

' renders the element
Techcrunch('Techcrunch', 'Techcrunch', 'an optional tech label', 'an optional description')
@enduml
```

