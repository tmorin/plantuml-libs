# Typeform


```text
simpleicons/T/Typeform
```

```text
include('simpleicons/T/Typeform')
```



| Illustration | Typeform |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Typeform.png) | ![illustration for Typeform](../../simpleicons/T/Typeform.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TypeformXs>`
- `<$TypeformSm>`
- `<$TypeformMd>`
- `<$TypeformLg>`





## Typeform

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Typeform
include('simpleicons/T/Typeform')

' renders the element
Typeform('Typeform', 'Typeform', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Typeform
include('simpleicons/T/Typeform')

' renders the element
Typeform('Typeform', 'Typeform', 'an optional tech label', 'an optional description')
@enduml
```

