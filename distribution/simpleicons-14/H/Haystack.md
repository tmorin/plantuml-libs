# Haystack


```text
simpleicons-14/H/Haystack
```

```text
include('simpleicons-14/H/Haystack')
```



| Illustration | Haystack |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Haystack.png) | ![illustration for Haystack](../../simpleicons-14/H/Haystack.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HaystackXs>`
- `<$HaystackSm>`
- `<$HaystackMd>`
- `<$HaystackLg>`





## Haystack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Haystack
include('simpleicons-14/H/Haystack')

' renders the element
Haystack('Haystack', 'Haystack', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Haystack
include('simpleicons-14/H/Haystack')

' renders the element
Haystack('Haystack', 'Haystack', 'an optional tech label', 'an optional description')
@enduml
```

