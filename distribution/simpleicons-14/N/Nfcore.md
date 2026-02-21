# Nfcore


```text
simpleicons-14/N/Nfcore
```

```text
include('simpleicons-14/N/Nfcore')
```



| Illustration | Nfcore |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Nfcore.png) | ![illustration for Nfcore](../../simpleicons-14/N/Nfcore.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NfcoreXs>`
- `<$NfcoreSm>`
- `<$NfcoreMd>`
- `<$NfcoreLg>`





## Nfcore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Nfcore
include('simpleicons-14/N/Nfcore')

' renders the element
Nfcore('Nfcore', 'Nfcore', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nfcore
include('simpleicons-14/N/Nfcore')

' renders the element
Nfcore('Nfcore', 'Nfcore', 'an optional tech label', 'an optional description')
@enduml
```

