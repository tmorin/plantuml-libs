# Antena3


```text
simpleicons-8/A/Antena3
```

```text
include('simpleicons-8/A/Antena3')
```



| Illustration | Antena3 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Antena3.png) | ![illustration for Antena3](../../simpleicons-8/A/Antena3.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Antena3Xs>`
- `<$Antena3Sm>`
- `<$Antena3Md>`
- `<$Antena3Lg>`





## Antena3

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Antena3
include('simpleicons-8/A/Antena3')

' renders the element
Antena3('Antena3', 'Antena3', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Antena3
include('simpleicons-8/A/Antena3')

' renders the element
Antena3('Antena3', 'Antena3', 'an optional tech label', 'an optional description')
@enduml
```

