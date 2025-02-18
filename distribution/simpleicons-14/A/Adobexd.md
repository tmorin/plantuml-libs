# Adobexd


```text
simpleicons-14/A/Adobexd
```

```text
include('simpleicons-14/A/Adobexd')
```



| Illustration | Adobexd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Adobexd.png) | ![illustration for Adobexd](../../simpleicons-14/A/Adobexd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AdobexdXs>`
- `<$AdobexdSm>`
- `<$AdobexdMd>`
- `<$AdobexdLg>`





## Adobexd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Adobexd
include('simpleicons-14/A/Adobexd')

' renders the element
Adobexd('Adobexd', 'Adobexd', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Adobexd
include('simpleicons-14/A/Adobexd')

' renders the element
Adobexd('Adobexd', 'Adobexd', 'an optional tech label', 'an optional description')
@enduml
```

