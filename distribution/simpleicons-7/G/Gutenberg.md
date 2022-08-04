# Gutenberg


```text
simpleicons-7/G/Gutenberg
```

```text
include('simpleicons-7/G/Gutenberg')
```



| Illustration | Gutenberg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Gutenberg.png) | ![illustration for Gutenberg](../../simpleicons-7/G/Gutenberg.Local.png) |




## Gutenberg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Gutenberg
include('simpleicons-7/G/Gutenberg')

' renders the element
Gutenberg('Gutenberg', 'Gutenberg', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gutenberg
include('simpleicons-7/G/Gutenberg')

' renders the element
Gutenberg('Gutenberg', 'Gutenberg', 'an optional tech label', 'an optional description')
@enduml
```

