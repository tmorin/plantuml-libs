# Fiat


```text
simpleicons-8/F/Fiat
```

```text
include('simpleicons-8/F/Fiat')
```



| Illustration | Fiat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/F/Fiat.png) | ![illustration for Fiat](../../simpleicons-8/F/Fiat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FiatXs>`
- `<$FiatSm>`
- `<$FiatMd>`
- `<$FiatLg>`





## Fiat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Fiat
include('simpleicons-8/F/Fiat')

' renders the element
Fiat('Fiat', 'Fiat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fiat
include('simpleicons-8/F/Fiat')

' renders the element
Fiat('Fiat', 'Fiat', 'an optional tech label', 'an optional description')
@enduml
```

