# Kotlin


```text
simpleicons-5/K/Kotlin
```

```text
include('simpleicons-5/K/Kotlin')
```



| Illustration | Kotlin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/K/Kotlin.png) | ![illustration for Kotlin](../../simpleicons-5/K/Kotlin.Local.png) |




## Kotlin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Kotlin
include('simpleicons-5/K/Kotlin')

' renders the element
Kotlin('Kotlin', 'Kotlin', 'an optional tech label')
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

' loads the Item which embeds the element Kotlin
include('simpleicons-5/K/Kotlin')

' renders the element
Kotlin('Kotlin', 'Kotlin', 'an optional tech label')
@enduml
```

