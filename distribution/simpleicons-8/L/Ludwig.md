# Ludwig


```text
simpleicons-8/L/Ludwig
```

```text
include('simpleicons-8/L/Ludwig')
```



| Illustration | Ludwig |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/L/Ludwig.png) | ![illustration for Ludwig](../../simpleicons-8/L/Ludwig.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LudwigXs>`
- `<$LudwigSm>`
- `<$LudwigMd>`
- `<$LudwigLg>`





## Ludwig

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Ludwig
include('simpleicons-8/L/Ludwig')

' renders the element
Ludwig('Ludwig', 'Ludwig', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Ludwig
include('simpleicons-8/L/Ludwig')

' renders the element
Ludwig('Ludwig', 'Ludwig', 'an optional tech label', 'an optional description')
@enduml
```

