# Puma


```text
simpleicons-14/P/Puma
```

```text
include('simpleicons-14/P/Puma')
```



| Illustration | Puma |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Puma.png) | ![illustration for Puma](../../simpleicons-14/P/Puma.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PumaXs>`
- `<$PumaSm>`
- `<$PumaMd>`
- `<$PumaLg>`





## Puma

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Puma
include('simpleicons-14/P/Puma')

' renders the element
Puma('Puma', 'Puma', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Puma
include('simpleicons-14/P/Puma')

' renders the element
Puma('Puma', 'Puma', 'an optional tech label', 'an optional description')
@enduml
```

