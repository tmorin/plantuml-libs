# Greatlearning


```text
simpleicons-14/G/Greatlearning
```

```text
include('simpleicons-14/G/Greatlearning')
```



| Illustration | Greatlearning |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Greatlearning.png) | ![illustration for Greatlearning](../../simpleicons-14/G/Greatlearning.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GreatlearningXs>`
- `<$GreatlearningSm>`
- `<$GreatlearningMd>`
- `<$GreatlearningLg>`





## Greatlearning

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Greatlearning
include('simpleicons-14/G/Greatlearning')

' renders the element
Greatlearning('Greatlearning', 'Greatlearning', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Greatlearning
include('simpleicons-14/G/Greatlearning')

' renders the element
Greatlearning('Greatlearning', 'Greatlearning', 'an optional tech label', 'an optional description')
@enduml
```

