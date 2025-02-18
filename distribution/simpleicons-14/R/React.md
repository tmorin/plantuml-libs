# React


```text
simpleicons-14/R/React
```

```text
include('simpleicons-14/R/React')
```



| Illustration | React |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/React.png) | ![illustration for React](../../simpleicons-14/R/React.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ReactXs>`
- `<$ReactSm>`
- `<$ReactMd>`
- `<$ReactLg>`





## React

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element React
include('simpleicons-14/R/React')

' renders the element
React('React', 'React', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element React
include('simpleicons-14/R/React')

' renders the element
React('React', 'React', 'an optional tech label', 'an optional description')
@enduml
```

