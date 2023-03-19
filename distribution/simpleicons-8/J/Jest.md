# Jest


```text
simpleicons-8/J/Jest
```

```text
include('simpleicons-8/J/Jest')
```



| Illustration | Jest |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/J/Jest.png) | ![illustration for Jest](../../simpleicons-8/J/Jest.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JestXs>`
- `<$JestSm>`
- `<$JestMd>`
- `<$JestLg>`





## Jest

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Jest
include('simpleicons-8/J/Jest')

' renders the element
Jest('Jest', 'Jest', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Jest
include('simpleicons-8/J/Jest')

' renders the element
Jest('Jest', 'Jest', 'an optional tech label', 'an optional description')
@enduml
```

