# Gatsby


```text
simpleicons/G/Gatsby
```

```text
include('simpleicons/G/Gatsby')
```



| Illustration | Gatsby |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Gatsby.png) | ![illustration for Gatsby](../../simpleicons/G/Gatsby.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GatsbyXs>`
- `<$GatsbySm>`
- `<$GatsbyMd>`
- `<$GatsbyLg>`





## Gatsby

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gatsby
include('simpleicons/G/Gatsby')

' renders the element
Gatsby('Gatsby', 'Gatsby', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gatsby
include('simpleicons/G/Gatsby')

' renders the element
Gatsby('Gatsby', 'Gatsby', 'an optional tech label', 'an optional description')
@enduml
```

