# Amazonecs


```text
simpleicons-14/A/Amazonecs
```

```text
include('simpleicons-14/A/Amazonecs')
```



| Illustration | Amazonecs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Amazonecs.png) | ![illustration for Amazonecs](../../simpleicons-14/A/Amazonecs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonecsXs>`
- `<$AmazonecsSm>`
- `<$AmazonecsMd>`
- `<$AmazonecsLg>`





## Amazonecs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Amazonecs
include('simpleicons-14/A/Amazonecs')

' renders the element
Amazonecs('Amazonecs', 'Amazonecs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Amazonecs
include('simpleicons-14/A/Amazonecs')

' renders the element
Amazonecs('Amazonecs', 'Amazonecs', 'an optional tech label', 'an optional description')
@enduml
```

