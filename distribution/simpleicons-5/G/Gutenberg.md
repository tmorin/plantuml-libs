# Gutenberg


```text
simpleicons-5/G/Gutenberg
```

```text
include('simpleicons-5/G/Gutenberg')
```



| Illustration | Gutenberg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Gutenberg.png) | ![illustration for Gutenberg](../../simpleicons-5/G/Gutenberg.Local.png) |




## Gutenberg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Gutenberg
include('simpleicons-5/G/Gutenberg')

' renders the element
Gutenberg('Gutenberg', 'Gutenberg', 'an optional tech label')
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

' loads the Item which embeds the element Gutenberg
include('simpleicons-5/G/Gutenberg')

' renders the element
Gutenberg('Gutenberg', 'Gutenberg', 'an optional tech label')
@enduml
```

