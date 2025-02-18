# I18Next


```text
simpleicons-14/I/I18Next
```

```text
include('simpleicons-14/I/I18Next')
```



| Illustration | I18Next |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/I/I18Next.png) | ![illustration for I18Next](../../simpleicons-14/I/I18Next.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$I18NextXs>`
- `<$I18NextSm>`
- `<$I18NextMd>`
- `<$I18NextLg>`





## I18Next

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element I18Next
include('simpleicons-14/I/I18Next')

' renders the element
I18Next('I18Next', 'I18 Next', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element I18Next
include('simpleicons-14/I/I18Next')

' renders the element
I18Next('I18Next', 'I18 Next', 'an optional tech label', 'an optional description')
@enduml
```

