# Asciidoctor


```text
simpleicons-8/A/Asciidoctor
```

```text
include('simpleicons-8/A/Asciidoctor')
```



| Illustration | Asciidoctor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Asciidoctor.png) | ![illustration for Asciidoctor](../../simpleicons-8/A/Asciidoctor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AsciidoctorXs>`
- `<$AsciidoctorSm>`
- `<$AsciidoctorMd>`
- `<$AsciidoctorLg>`





## Asciidoctor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Asciidoctor
include('simpleicons-8/A/Asciidoctor')

' renders the element
Asciidoctor('Asciidoctor', 'Asciidoctor', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Asciidoctor
include('simpleicons-8/A/Asciidoctor')

' renders the element
Asciidoctor('Asciidoctor', 'Asciidoctor', 'an optional tech label', 'an optional description')
@enduml
```

