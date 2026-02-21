# Contentstack


```text
simpleicons-14/C/Contentstack
```

```text
include('simpleicons-14/C/Contentstack')
```



| Illustration | Contentstack |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Contentstack.png) | ![illustration for Contentstack](../../simpleicons-14/C/Contentstack.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ContentstackXs>`
- `<$ContentstackSm>`
- `<$ContentstackMd>`
- `<$ContentstackLg>`





## Contentstack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Contentstack
include('simpleicons-14/C/Contentstack')

' renders the element
Contentstack('Contentstack', 'Contentstack', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Contentstack
include('simpleicons-14/C/Contentstack')

' renders the element
Contentstack('Contentstack', 'Contentstack', 'an optional tech label', 'an optional description')
@enduml
```

