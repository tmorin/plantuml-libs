# Junit5


```text
simpleicons-14/J/Junit5
```

```text
include('simpleicons-14/J/Junit5')
```



| Illustration | Junit5 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/J/Junit5.png) | ![illustration for Junit5](../../simpleicons-14/J/Junit5.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Junit5Xs>`
- `<$Junit5Sm>`
- `<$Junit5Md>`
- `<$Junit5Lg>`





## Junit5

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Junit5
include('simpleicons-14/J/Junit5')

' renders the element
Junit5('Junit5', 'Junit5', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Junit5
include('simpleicons-14/J/Junit5')

' renders the element
Junit5('Junit5', 'Junit5', 'an optional tech label', 'an optional description')
@enduml
```

