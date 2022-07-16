# Kotlin


```text
simpleicons-7/K/Kotlin
```

```text
include('simpleicons-7/K/Kotlin')
```



| Illustration | Kotlin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/K/Kotlin.png) | ![illustration for Kotlin](../../simpleicons-7/K/Kotlin.Local.png) |




## Kotlin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Kotlin
include('simpleicons-7/K/Kotlin')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Kotlin
include('simpleicons-7/K/Kotlin')

' renders the element
Kotlin('Kotlin', 'Kotlin', 'an optional tech label')
@enduml
```

