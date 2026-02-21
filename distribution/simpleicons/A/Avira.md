# Avira


```text
simpleicons/A/Avira
```

```text
include('simpleicons/A/Avira')
```



| Illustration | Avira |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Avira.png) | ![illustration for Avira](../../simpleicons/A/Avira.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AviraXs>`
- `<$AviraSm>`
- `<$AviraMd>`
- `<$AviraLg>`





## Avira

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Avira
include('simpleicons/A/Avira')

' renders the element
Avira('Avira', 'Avira', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Avira
include('simpleicons/A/Avira')

' renders the element
Avira('Avira', 'Avira', 'an optional tech label', 'an optional description')
@enduml
```

