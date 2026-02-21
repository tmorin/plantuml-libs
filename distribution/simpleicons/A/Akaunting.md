# Akaunting


```text
simpleicons/A/Akaunting
```

```text
include('simpleicons/A/Akaunting')
```



| Illustration | Akaunting |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Akaunting.png) | ![illustration for Akaunting](../../simpleicons/A/Akaunting.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AkauntingXs>`
- `<$AkauntingSm>`
- `<$AkauntingMd>`
- `<$AkauntingLg>`





## Akaunting

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Akaunting
include('simpleicons/A/Akaunting')

' renders the element
Akaunting('Akaunting', 'Akaunting', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Akaunting
include('simpleicons/A/Akaunting')

' renders the element
Akaunting('Akaunting', 'Akaunting', 'an optional tech label', 'an optional description')
@enduml
```

