# Nubank


```text
simpleicons-8/N/Nubank
```

```text
include('simpleicons-8/N/Nubank')
```



| Illustration | Nubank |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/N/Nubank.png) | ![illustration for Nubank](../../simpleicons-8/N/Nubank.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NubankXs>`
- `<$NubankSm>`
- `<$NubankMd>`
- `<$NubankLg>`





## Nubank

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Nubank
include('simpleicons-8/N/Nubank')

' renders the element
Nubank('Nubank', 'Nubank', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nubank
include('simpleicons-8/N/Nubank')

' renders the element
Nubank('Nubank', 'Nubank', 'an optional tech label', 'an optional description')
@enduml
```

