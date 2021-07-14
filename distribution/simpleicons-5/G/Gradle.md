# Gradle


```text
simpleicons-5/G/Gradle
```

```text
include('simpleicons-5/G/Gradle')
```



| Illustration | Gradle |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Gradle.png) | ![illustration for Gradle](../../simpleicons-5/G/Gradle.Local.png) |




## Gradle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Gradle
include('simpleicons-5/G/Gradle')

' renders the element
Gradle('Gradle', 'Gradle', 'an optional tech label')
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

' loads the Item which embeds the element Gradle
include('simpleicons-5/G/Gradle')

' renders the element
Gradle('Gradle', 'Gradle', 'an optional tech label')
@enduml
```

