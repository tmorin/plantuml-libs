# Textpattern


```text
simpleicons-14/T/Textpattern
```

```text
include('simpleicons-14/T/Textpattern')
```



| Illustration | Textpattern |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Textpattern.png) | ![illustration for Textpattern](../../simpleicons-14/T/Textpattern.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TextpatternXs>`
- `<$TextpatternSm>`
- `<$TextpatternMd>`
- `<$TextpatternLg>`





## Textpattern

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Textpattern
include('simpleicons-14/T/Textpattern')

' renders the element
Textpattern('Textpattern', 'Textpattern', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Textpattern
include('simpleicons-14/T/Textpattern')

' renders the element
Textpattern('Textpattern', 'Textpattern', 'an optional tech label', 'an optional description')
@enduml
```

