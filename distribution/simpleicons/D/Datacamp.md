# Datacamp


```text
simpleicons/D/Datacamp
```

```text
include('simpleicons/D/Datacamp')
```



| Illustration | Datacamp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Datacamp.png) | ![illustration for Datacamp](../../simpleicons/D/Datacamp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DatacampXs>`
- `<$DatacampSm>`
- `<$DatacampMd>`
- `<$DatacampLg>`





## Datacamp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Datacamp
include('simpleicons/D/Datacamp')

' renders the element
Datacamp('Datacamp', 'Datacamp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Datacamp
include('simpleicons/D/Datacamp')

' renders the element
Datacamp('Datacamp', 'Datacamp', 'an optional tech label', 'an optional description')
@enduml
```

