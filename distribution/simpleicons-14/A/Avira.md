# Avira


```text
simpleicons-14/A/Avira
```

```text
include('simpleicons-14/A/Avira')
```



| Illustration | Avira |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Avira.png) | ![illustration for Avira](../../simpleicons-14/A/Avira.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Avira
include('simpleicons-14/A/Avira')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Avira
include('simpleicons-14/A/Avira')

' renders the element
Avira('Avira', 'Avira', 'an optional tech label', 'an optional description')
@enduml
```

