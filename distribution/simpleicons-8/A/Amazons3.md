# Amazons3


```text
simpleicons-8/A/Amazons3
```

```text
include('simpleicons-8/A/Amazons3')
```



| Illustration | Amazons3 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Amazons3.png) | ![illustration for Amazons3](../../simpleicons-8/A/Amazons3.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Amazons3Xs>`
- `<$Amazons3Sm>`
- `<$Amazons3Md>`
- `<$Amazons3Lg>`





## Amazons3

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Amazons3
include('simpleicons-8/A/Amazons3')

' renders the element
Amazons3('Amazons3', 'Amazons3', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Amazons3
include('simpleicons-8/A/Amazons3')

' renders the element
Amazons3('Amazons3', 'Amazons3', 'an optional tech label', 'an optional description')
@enduml
```

