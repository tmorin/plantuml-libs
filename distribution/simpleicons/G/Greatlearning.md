# Greatlearning


```text
simpleicons/G/Greatlearning
```

```text
include('simpleicons/G/Greatlearning')
```



| Illustration | Greatlearning |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Greatlearning.png) | ![illustration for Greatlearning](../../simpleicons/G/Greatlearning.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Greatlearning
include('simpleicons/G/Greatlearning')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Greatlearning
include('simpleicons/G/Greatlearning')

' renders the element
Greatlearning('Greatlearning', 'Greatlearning', 'an optional tech label', 'an optional description')
@enduml
```

