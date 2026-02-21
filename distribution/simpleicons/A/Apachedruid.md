# Apachedruid


```text
simpleicons/A/Apachedruid
```

```text
include('simpleicons/A/Apachedruid')
```



| Illustration | Apachedruid |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Apachedruid.png) | ![illustration for Apachedruid](../../simpleicons/A/Apachedruid.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApachedruidXs>`
- `<$ApachedruidSm>`
- `<$ApachedruidMd>`
- `<$ApachedruidLg>`





## Apachedruid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Apachedruid
include('simpleicons/A/Apachedruid')

' renders the element
Apachedruid('Apachedruid', 'Apachedruid', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Apachedruid
include('simpleicons/A/Apachedruid')

' renders the element
Apachedruid('Apachedruid', 'Apachedruid', 'an optional tech label', 'an optional description')
@enduml
```

