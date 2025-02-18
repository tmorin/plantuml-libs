# Gmail


```text
simpleicons-14/G/Gmail
```

```text
include('simpleicons-14/G/Gmail')
```



| Illustration | Gmail |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Gmail.png) | ![illustration for Gmail](../../simpleicons-14/G/Gmail.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GmailXs>`
- `<$GmailSm>`
- `<$GmailMd>`
- `<$GmailLg>`





## Gmail

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Gmail
include('simpleicons-14/G/Gmail')

' renders the element
Gmail('Gmail', 'Gmail', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gmail
include('simpleicons-14/G/Gmail')

' renders the element
Gmail('Gmail', 'Gmail', 'an optional tech label', 'an optional description')
@enduml
```

