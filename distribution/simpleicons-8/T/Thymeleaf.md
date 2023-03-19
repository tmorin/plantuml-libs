# Thymeleaf


```text
simpleicons-8/T/Thymeleaf
```

```text
include('simpleicons-8/T/Thymeleaf')
```



| Illustration | Thymeleaf |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Thymeleaf.png) | ![illustration for Thymeleaf](../../simpleicons-8/T/Thymeleaf.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThymeleafXs>`
- `<$ThymeleafSm>`
- `<$ThymeleafMd>`
- `<$ThymeleafLg>`





## Thymeleaf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Thymeleaf
include('simpleicons-8/T/Thymeleaf')

' renders the element
Thymeleaf('Thymeleaf', 'Thymeleaf', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Thymeleaf
include('simpleicons-8/T/Thymeleaf')

' renders the element
Thymeleaf('Thymeleaf', 'Thymeleaf', 'an optional tech label', 'an optional description')
@enduml
```

