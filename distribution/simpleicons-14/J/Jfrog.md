# Jfrog


```text
simpleicons-14/J/Jfrog
```

```text
include('simpleicons-14/J/Jfrog')
```



| Illustration | Jfrog |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/J/Jfrog.png) | ![illustration for Jfrog](../../simpleicons-14/J/Jfrog.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JfrogXs>`
- `<$JfrogSm>`
- `<$JfrogMd>`
- `<$JfrogLg>`





## Jfrog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Jfrog
include('simpleicons-14/J/Jfrog')

' renders the element
Jfrog('Jfrog', 'Jfrog', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Jfrog
include('simpleicons-14/J/Jfrog')

' renders the element
Jfrog('Jfrog', 'Jfrog', 'an optional tech label', 'an optional description')
@enduml
```

