# Gradle


```text
simpleicons-8/G/Gradle
```

```text
include('simpleicons-8/G/Gradle')
```



| Illustration | Gradle |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Gradle.png) | ![illustration for Gradle](../../simpleicons-8/G/Gradle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GradleXs>`
- `<$GradleSm>`
- `<$GradleMd>`
- `<$GradleLg>`





## Gradle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Gradle
include('simpleicons-8/G/Gradle')

' renders the element
Gradle('Gradle', 'Gradle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gradle
include('simpleicons-8/G/Gradle')

' renders the element
Gradle('Gradle', 'Gradle', 'an optional tech label', 'an optional description')
@enduml
```

