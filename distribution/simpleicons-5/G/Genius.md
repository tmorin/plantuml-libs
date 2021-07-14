# Genius


```text
simpleicons-5/G/Genius
```

```text
include('simpleicons-5/G/Genius')
```



| Illustration | Genius |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Genius.png) | ![illustration for Genius](../../simpleicons-5/G/Genius.Local.png) |




## Genius

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Genius
include('simpleicons-5/G/Genius')

' renders the element
Genius('Genius', 'Genius', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Genius
include('simpleicons-5/G/Genius')

' renders the element
Genius('Genius', 'Genius', 'an optional tech label')
@enduml
```

