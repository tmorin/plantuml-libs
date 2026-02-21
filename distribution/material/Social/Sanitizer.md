# Sanitizer


```text
material/Social/Sanitizer
```

```text
include('material/Social/Sanitizer')
```



| Illustration | Sanitizer |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/Sanitizer.png) | ![illustration for Sanitizer](../../material/Social/Sanitizer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SanitizerXs>`
- `<$SanitizerSm>`
- `<$SanitizerMd>`
- `<$SanitizerLg>`





## Sanitizer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Sanitizer
include('material/Social/Sanitizer')

' renders the element
Sanitizer('Sanitizer', 'Sanitizer', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Sanitizer
include('material/Social/Sanitizer')

' renders the element
Sanitizer('Sanitizer', 'Sanitizer', 'an optional tech label', 'an optional description')
@enduml
```

