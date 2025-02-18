# Ycombinator


```text
simpleicons-14/Y/Ycombinator
```

```text
include('simpleicons-14/Y/Ycombinator')
```



| Illustration | Ycombinator |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Y/Ycombinator.png) | ![illustration for Ycombinator](../../simpleicons-14/Y/Ycombinator.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$YcombinatorXs>`
- `<$YcombinatorSm>`
- `<$YcombinatorMd>`
- `<$YcombinatorLg>`





## Ycombinator

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ycombinator
include('simpleicons-14/Y/Ycombinator')

' renders the element
Ycombinator('Ycombinator', 'Ycombinator', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ycombinator
include('simpleicons-14/Y/Ycombinator')

' renders the element
Ycombinator('Ycombinator', 'Ycombinator', 'an optional tech label', 'an optional description')
@enduml
```

