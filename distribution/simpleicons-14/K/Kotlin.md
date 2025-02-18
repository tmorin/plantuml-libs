# Kotlin


```text
simpleicons-14/K/Kotlin
```

```text
include('simpleicons-14/K/Kotlin')
```



| Illustration | Kotlin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Kotlin.png) | ![illustration for Kotlin](../../simpleicons-14/K/Kotlin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KotlinXs>`
- `<$KotlinSm>`
- `<$KotlinMd>`
- `<$KotlinLg>`





## Kotlin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Kotlin
include('simpleicons-14/K/Kotlin')

' renders the element
Kotlin('Kotlin', 'Kotlin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kotlin
include('simpleicons-14/K/Kotlin')

' renders the element
Kotlin('Kotlin', 'Kotlin', 'an optional tech label', 'an optional description')
@enduml
```

